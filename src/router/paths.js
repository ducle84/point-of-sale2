/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/service-request',
    name: 'Service Request',
    view: 'ServiceRequest'
  },
  {
    path: '/appointment-book',
    name: 'Appointment Book',
    view: 'AppointmentBook'
  },
  {
    path: '/customer',
    view: 'Customer'
  },
  {
    path: '/giftcard',
    view: 'Giftcard'
  },
  {
    path: '/ticket-manager',
    view: 'TicketManager'
  },
  {
    path: '/reports',
    view: 'Reports'
  },
  {
    path: '/owner-setup',
    view: 'OwnerSetup'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/logout',
    view: 'Logout'
  }
]
