def camelCase(string):
	new_string = ""
	i = 0
	while i < len(string):
		if string[i] == "_":
			i += 1
			new_string += string[i].upper()
		else:
			new_string += string[i]
		i+=1
	return new_string


def main():
	print(camelCase("hello_world_two"))
main()