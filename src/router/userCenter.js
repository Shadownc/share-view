const userEntry = r => require.ensure([], () => r(require('components/userCenter/userEntry')), 'userCenter');
const memberCenter = r => require.ensure([], () => r(require('components/userCenter/index')), 'userCenter');
const collectList = r => require.ensure([], () => r(require('components/userCenter/collectList')), 'userCenter');


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
        },
        {
            path: 'list',
            name: 'collectList',
            components: {
                default: collectList
            },
            meta: { isPublish: true, requireAuth: true }
        }
    ]

}
export { userCenter }