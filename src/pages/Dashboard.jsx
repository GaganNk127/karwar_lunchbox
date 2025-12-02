import { useAuth } from "../context/AuthContext";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const snapshot = await getDocs(collection(db, "orders"));
        const ordersData = snapshot.docs.map((doc) => ({ 
          id: doc.id, 
          ...doc.data(),
          date: doc.data().date?.toDate?.() || new Date(doc.data().date)
        }));
        setOrders(ordersData.sort((a, b) => b.date - a.date));
      } catch (error) {
        console.error("Error loading orders:", error);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", orderId), {
        status: newStatus,
        updatedAt: new Date()
      });
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const deleteOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await deleteDoc(doc(db, "orders", orderId));
        setOrders(orders.filter(order => order.id !== orderId));
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === "all" || order.status === filter;
    const matchesSearch = searchTerm === "" || 
      order.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phone?.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "text-yellow-400 bg-yellow-400/20";
      case "confirmed": return "text-blue-400 bg-blue-400/20";
      case "active": return "text-green-400 bg-green-400/20";
      case "cancelled": return "text-red-400 bg-red-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  const getPlanPrice = (plan) => {
    switch (plan) {
      case "daily": return "₹100/day";
      case "weekly": return "₹499/week";
      case "monthly": return "₹1,799/month";
      default: return plan;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-ocean flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wave-blue mx-auto mb-4"></div>
          <p className="text-sand-beige">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-ocean py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-ocean font-bold text-sand-beige">
              Admin Dashboard
            </h1>
            <p className="text-sand-beige/70 mt-1">
              Manage orders and subscriptions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sand-beige/70">
              Welcome, {user?.email}
            </span>
            <button
              onClick={logout}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sand-beige/70 text-sm">Total Orders</p>
                <p className="text-2xl font-bold text-sand-beige">{orders.length}</p>
              </div>
              <div className="w-12 h-12 bg-wave-blue/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sand-beige/70 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {orders.filter(o => o.status === "pending").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sand-beige/70 text-sm">Active</p>
                <p className="text-2xl font-bold text-green-400">
                  {orders.filter(o => o.status === "active").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sand-beige/70 text-sm">Monthly Revenue</p>
                <p className="text-2xl font-bold text-sand-beige">
                  ₹{orders.filter(o => o.status === "active").reduce((sum, o) => {
                    const price = o.plan === "monthly" ? 1799 : o.plan === "weekly" ? 499 : 100;
                    return sum + price;
                  }, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-wave-blue/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-sand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-ocean-dark border border-wave-blue/20 rounded-lg text-sand-beige placeholder-sand-beige/50 focus:outline-none focus:border-wave-blue transition-colors"
              />
            </div>
            <div className="flex gap-2">
              {["all", "pending", "confirmed", "active", "cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === status
                      ? "bg-wave-blue text-white"
                      : "bg-ocean-dark text-sand-beige/70 hover:text-sand-beige border border-wave-blue/20"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="card overflow-x-auto">
          <h2 className="text-xl font-bold text-sand-beige mb-6">Orders</h2>
          
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-sand-beige/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-sand-beige/50">No orders found</p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-wave-blue/20">
                  <th className="text-left py-3 px-4 text-sand-beige/70 font-medium">Customer</th>
                  <th className="text-left py-3 px-4 text-sand-beige/70 font-medium">Contact</th>
                  <th className="text-left py-3 px-4 text-sand-beige/70 font-medium">Plan</th>
                  <th className="text-left py-3 px-4 text-sand-beige/70 font-medium">Start Date</th>
                  <th className="text-left py-3 px-4 text-sand-beige/70 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-sand-beige/70 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-wave-blue/10 hover:bg-ocean-dark/50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sand-beige font-medium">{order.name}</p>
                        <p className="text-sand-beige/50 text-sm">{order.address}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sand-beige/70 text-sm">{order.email || "N/A"}</p>
                        <p className="text-sand-beige/70 text-sm">{order.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sand-beige">{getPlanPrice(order.plan)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sand-beige/70">
                        {order.startDate ? new Date(order.startDate).toLocaleDateString() : "N/A"}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <select
                        value={order.status || "pending"}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-wave-blue ${getStatusColor(order.status || "pending")}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="active">Active</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.location.href = `tel:${order.phone}`}
                          className="text-wave-blue hover:text-wave-light transition-colors"
                          title="Call customer"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => window.location.href = `mailto:${order.email}`}
                          className="text-wave-blue hover:text-wave-light transition-colors"
                          title="Email customer"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Delete order"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
