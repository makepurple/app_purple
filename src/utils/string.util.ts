export class StringUtils {
	public static rename<T>(
		templateLiteral: (strings: TemplateStringsArray, ...exprs: any[]) => T
	): (strings: TemplateStringsArray, ...exprs: any[]) => T {
		return (strings: TemplateStringsArray, ...exprs: any[]) => {
			return templateLiteral(strings, ...exprs);
		};
	}
}
