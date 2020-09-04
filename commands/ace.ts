import fs from 'fs'
const [, , commandName, props] = process.argv
const args = props.split(',')

if (commandName == 'make:command') {
	if (args[0] != 'undefined') {
		const templateDir = process.cwd() + '/core/template/command'
		const commandDir = process.cwd() + '/src/commands'
		makeFile(templateDir, commandDir)
	}
} else if (commandName == 'make:event') {
	const templateDir = process.cwd() + '/core/template/event'
	const eventDir = process.cwd() + '/src/events'
	if (args[0] != 'undefined') {
		makeFile(templateDir, eventDir, args[0])
	}
}

function makeFile(templateDir: string, folderDir: string, eventName: string = '') {
	fs.readFile(templateDir, 'utf8', (err, data) => {
		const fileNameUpperCase = args[0].charAt(0).toUpperCase() + args[0].slice(1)
		let newFile = data.replace(/~Example/g, fileNameUpperCase).replace(/~EventName/g, eventName.charAt(0).toLowerCase() + eventName.slice(1))

		fs.access(`${folderDir}/${fileNameUpperCase}.ts`, fs.constants.F_OK, async (err) => {
			if (err?.code == 'ENOENT') {
				fs.writeFile(`${folderDir}/${fileNameUpperCase}.ts`, newFile, (error) => {
					if (!err) console.log(`File ${fileNameUpperCase} was create`)
				})
			} else {
				return console.log(`File already exist in "${folderDir.replace(/\\/g, '/')}"`)
			}
		})
	})
}
