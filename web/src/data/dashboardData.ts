// Sample data for dashboard charts and metrics
export const revenueData = {
  data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 135, 160],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const userGrowthData = {
  data: [10, 15, 20, 25, 27, 30, 35, 40, 55, 70, 90, 100],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const trafficSourceData = {
  series: [45, 25, 15, 10, 5],
  labels: ['Direct', 'Social Media', 'Referral', 'Organic Search', 'Email']
};

export const deviceData = {
  series: [60, 25, 15],
  labels: ['Desktop', 'Mobile', 'Tablet']
};

export const recentActivities = [
  {
    id: '1',
    user: {
      name: 'Emma Watson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    action: 'created a new project',
    target: 'Analytics Dashboard',
    time: '2 hours ago',
    status: 'completed'
  },
  {
    id: '2',
    user: {
      name: 'James Smith'
    },
    action: 'commented on',
    target: 'User Management Module',
    time: '5 hours ago'
  },
  {
    id: '3',
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    action: 'completed task',
    target: 'Design Review',
    time: '1 day ago',
    status: 'completed'
  },
  {
    id: '4',
    user: {
      name: 'Sarah Miller'
    },
    action: 'started',
    target: 'API Integration',
    time: '1 day ago',
    status: 'pending'
  },
  {
    id: '5',
    user: {
      name: 'David Wilson'
    },
    action: 'deployment failed for',
    target: 'Production Server',
    time: '2 days ago',
    status: 'failed'
  }
];