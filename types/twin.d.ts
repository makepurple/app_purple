import "twin.macro"
import styledImport, { css as cssImport } from "styled-components"
import { ComponentType } from "react"

declare module "twin.macro" {
	// The styled and css imports
	const styled: typeof styledImport
	const css: typeof cssImport
}

declare module "react" {
	// The css prop
	interface HTMLAttributes<T> extends DOMAttributes<T> {
		css?: any
	}
	// The inline svg css prop
	interface SVGProps<T> extends SVGProps<SVGSVGElement> {
		css?: any
	}
}

// The "as" prop on styled components
declare global {
	namespace JSX {
		interface IntrinsicAttributes<T> extends DOMAttributes<T> {
			as?: string | ComponentType | Element
			forwardedAs?: string | ComponentType | Element
		}
	}
}
