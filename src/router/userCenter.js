const userEntry = r => require.ensure([], () => r(require('components/userCenter/userEntry')), 'userCenter');
const memberCenter = r => require.ensure([], () => r(require('components/userCenter/index')), 'userCenter');


const userCenter = {
    path: '/member-center',
    component: userEntry,
    children: [
        {
            path: '',
            name: 'memberCenter',
            components: {
                default: memberCenter
            },
            meta: { isPublish: true, requireAuth: true }
        }
    ]

}
export { userCenter }