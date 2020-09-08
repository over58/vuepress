const fse = require('fs-extra')
const path = require('path')

const source = path.resolve(__dirname, '../source')
const ingoreDirs = ['.vuepress', 'README.md']

const routes = []
fse.readdir(source, (err, files) => {
    if(err) throw err

    files.filter(dir => !ingoreDirs.includes(dir)).forEach(dir =>{
        const item = {
            title: dir,
            collapsable:true,
            children: []
        }
        const files = fse.readdirSync(source+'/'+dir)
        files.forEach(file => {
            const {name } = path.parse(file)
            if(name === 'README') {
                item.children.push(`/${dir}/`)
            }else{
                item.children.push(`/${dir}/${name}`)
            }
        })
        routes.push(item)
    })

    const outputFile = path.join(__dirname, '../source/.vuepress/routes.json')
    fse.writeJSONSync(outputFile, routes, { spaces: '  ', EOL: '\n', encoding: 'utf-8' })
})

module.exports = routes