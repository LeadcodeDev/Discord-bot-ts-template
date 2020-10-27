import { EventType, Roles } from '../../utils'

type Context = {
	name: string
	description: string
	tag: string
	alias?: Array<string>
	roles?: Array<Roles>
}

export default function Event({ name, description, tag, alias, roles }: Context) {
	return function (constructor: Function) {
		constructor.prototype.name = name
		constructor.prototype.description = description
		constructor.prototype.tag = tag
		constructor.prototype.alias = alias || []
		constructor.prototype.roles = roles || []
	}
}
