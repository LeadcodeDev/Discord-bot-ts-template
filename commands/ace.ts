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

			fs.access(`${commandDir}/${fileNameUpperCase}.ts`, fs.constants.F_OK, async (err) => {
				// if (err == null) Logger.emit('logger', Types.FATAL, `File already exist in ${commandDir}`)
				if (err?.code == 'ENOENT') {
					fs.writeFile(`${commandDir}/${fileNameUpperCase}.ts`, newFile, (error) => {
						if (!err) console.log(`File ${fileNameUpperCase} was create`)
					})
				} else {
					return console.log(`File already exist in "${commandDir.replace(/\\/g, '/')}"`)
				}
			})
		})
	}
}
