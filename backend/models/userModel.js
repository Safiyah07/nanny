const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
			validate: {
				validator: function (value) {
					// Use a regular expression to check if the email ends with ".com"
					return /\.com$/.test(value);
				},
				message: 'Email must end with ".com"',
			},
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', userSchema)
