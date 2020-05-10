var ghpages = require('gh-pages');

// publishes to master branch
ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        message: ':rocket:',
        repo: 'https://github.com/satyasinha/satyasinha.github.io',
        user: {
            name: 'satyasinha',
            email: 'satyendra.n.sinha@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
