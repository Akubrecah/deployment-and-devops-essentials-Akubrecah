import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import axios from 'axios';
import { FaExclamationTriangle, FaBox } from 'react-icons/fa';

const Dashboard = ({url}) => {
    
    const [data, setData] = useState([
        {name: 'Jan', sales: 4000, orders: 240},
        {name: 'Feb', sales: 3000, orders: 139},
        {name: 'Mar', sales: 2000, orders: 980},
        {name: 'Apr', sales: 2780, orders: 390},
        {name: 'May', sales: 1890, orders: 480},
        {name: 'Jun', sales: 2390, orders: 380},
        {name: 'Jul', sales: 3490, orders: 430},
    ]);

    const [lowStockItems, setLowStockItems] = useState([]);

    const fetchStock = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
            const lowStock = response.data.data.filter(item => item.stock < 5);
            setLowStockItems(lowStock);
        }
    }

    useEffect(() => {
        fetchStock();
    }, [])

  return (
    <div className='w-[80%] ml-[max(2vw,10px)] mt-[30px] animate-fadeIn p-4'>
        <h2 className='text-[28px] font-bold text-dark mb-6'>Dashboard</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-[24px] shadow-card flex items-center gap-4">
                <div className="p-4 bg-green-100 rounded-full text-secondary"><FaBox size={24} /></div>
                <div>
                    <p className="text-gray-500 text-[14px]">Total Orders</p>
                    <h3 className="text-[24px] font-bold text-dark">1,234</h3>
                </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-card flex items-center gap-4">
                <div className="p-4 bg-yellow-100 rounded-full text-primary"><FaBox size={24} /></div>
                <div>
                    <p className="text-gray-500 text-[14px]">Total Sales</p>
                    <h3 className="text-[24px] font-bold text-dark">KES 45,678</h3>
                </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-card flex items-center gap-4">
                <div className="p-4 bg-red-100 rounded-full text-red-500"><FaExclamationTriangle size={24} /></div>
                <div>
                    <p className="text-gray-500 text-[14px]">Low Stock Items</p>
                    <h3 className="text-[24px] font-bold text-dark">{lowStockItems.length}</h3>
                </div>
            </div>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-[24px] shadow-card h-[400px]">
                <h3 className="text-[18px] font-bold text-dark mb-4">Sales Overview</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
                        <Bar dataKey="sales" fill="#00A082" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-card h-[400px]">
                <h3 className="text-[18px] font-bold text-dark mb-4">Order Trends</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}} />
                        <Line type="monotone" dataKey="orders" stroke="#FFC244" strokeWidth={3} dot={{r: 4}} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Low Stock Alert Table */}
        {lowStockItems.length > 0 && (
            <div className="bg-white p-6 rounded-[24px] shadow-card">
                <h3 className="text-[18px] font-bold text-red-500 mb-4 flex items-center gap-2"><FaExclamationTriangle /> Low Stock Alerts</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-100">
                                <th className="p-3 font-medium">Item Name</th>
                                <th className="p-3 font-medium">Category</th>
                                <th className="p-3 font-medium">Stock Left</th>
                                <th className="p-3 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowStockItems.map((item, index) => (
                                <tr key={index} className="border-b border-gray-50 last:border-none hover:bg-gray-50">
                                    <td className="p-3 font-medium text-dark">{item.name}</td>
                                    <td className="p-3 text-gray-500">{item.category}</td>
                                    <td className="p-3 font-bold text-red-500">{item.stock}</td>
                                    <td className="p-3"><span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[12px] font-bold">Restock Needed</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
    </div>
  )
}

export default Dashboard
