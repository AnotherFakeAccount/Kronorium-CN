module.exports={
    title:'Kronorium CN',
    description:'使命召唤黑色行动僵尸指南',
    themeConfig:{
        nav:[
            {text:'游戏资料库',link:'/zh/guide/'},
            {text:'僵尸编年史',link:'/zh/chronicles/chronicles'},
            {text:'FAQ',link:'/zh/faq/faq'},
            {text:'加入我们',link:'/zh/contribute/contribute'},
        ],
        sidebar:{
            '/zh/guide/':[
                '',
                'bo4/voyage_of_despair/voyage_of_despair',
                'bo4/blood_of_the_dead/blood_of_the_dead'
            ],
            '/zh/contribute/':[
                'contribute'
            ],
            '/zh/chronicles/':[
                'chronicles'
            ],
            '/zh/faq/':[
                'faq'
            ]
        },
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/active-header-links':{},
        '@vuepress/medium-zoom':{},
        '@vuepress/pwa':{
            serviceWorker: true,
            updatePopup: {
                message: "有新内容",
                popupComponent: 'MySWUpdatePopup',
                buttonText: "刷新"
          }
        }
    },
    base:'/Kronorium-CN//',
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'icon', href: '/Icon-512.png' }],
    ],
};