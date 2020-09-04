import fs from 'fs'
const [, , commandName, props] = process.argv
const args = props.split(',')

if (commandName == 'make:command') {
	if (args[0] != 'undefined') {
		const templateDir = process.cwd() + '/core/template/command'
		const indexDir = process.cwd() + '/src/commands/index.ts'
		const commandDir = process.cwd() + '/src/commands'
		const imp = Buffer.from(`import ${args[0].charAt(0).toUpperCase() + args[0].slice(1)} from './${args[0].charAt(0).toUpperCase() + args[0].slice(1)}'\n`)
		makeFile(indexDir, imp, templateDir, commandDir)
	}
} else if (commandName == 'make:event') {
	const templateDir = process.cwd() + '/core/template/event'
	const indexDir = process.cwd() + '/src/events/index.ts'
	const eventDir = process.cwd() + '/src/events'
	const imp = Buffer.from(`import ${args[0].charAt(0).toUpperCase() + args[0].slice(1)} from './${args[0].charAt(0).toUpperCase() + args[0].slice(1)}'\n`)
	if (args[0] != 'undefined') {
		makeFile(indexDir, imp, templateDir, eventDir, args[0])
	}
}

function makeFile(indexDir: string, imp: Buffer, templateDir: string, folderDir: string, eventName: string = '') {
	fs.readFile(templateDir, 'utf8', (err, data) => {
		const fileNameUpperCase = args[0].charAt(0).toUpperCase() + args[0].slice(1)
		let newFile = data.replace(/~Example/g, fileNameUpperCase).replace(/~EventName/g, eventName.charAt(0).toLowerCase() + eventName.slice(1))

		fs.access(`${folderDir}/${fileNameUpperCase}.ts`, fs.constants.F_OK, async (err) => {
			if (err?.code == 'ENOENT') {
				fs.writeFile(`${folderDir}/${fileNameUpperCase}.ts`, newFile, (error) => {
					if (!err) console.log(`File ${fileNameUpperCase} was create`)

					fs.readFile(indexDir, (_, initialData) => {
						const oldData = initialData.toString().replace(/ }/g, `, ${fileNameUpperCase} }`)
						const oldDataBuffer = Buffer.from(oldData)
						fs.open(indexDir, 'w+', (_, fd) => {
							fs.write(fd, imp, 0, imp.length, 0, () => {
								fs.write(fd, oldDataBuffer, 0, oldDataBuffer.length, imp.length, () => {
									fs.close(fd, () => {})
								})
							})
						})
					})
				})
			} else {
				return console.log(`File already exist in "${folderDir.replace(/\\/g, '/')}"`)
			}
		})
	})
}
