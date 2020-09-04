import fs from 'fs'
const [, , commandName, props] = process.argv
const args = props.split(',')

if (commandName == 'make:command') {
	if (args[0] != 'undefined') {
		const templateDir = process.cwd() + '/core/template/command'
		fs.readFile(templateDir, 'utf8', (err, data) => {
			const fileNameUpperCase = args[0].charAt(0).toUpperCase() + args[0].slice(1)
			const newFile = data.replace(/Example/g, fileNameUpperCase)
			const commandDir = process.cwd() + '/src/commands'
			fs.writeFile(`${commandDir}/${fileNameUpperCase}.ts`, newFile, (error) => {
				if (error) console.log(error)
			})
		})
	}
} else if (commandName == 'make:event') {
}
