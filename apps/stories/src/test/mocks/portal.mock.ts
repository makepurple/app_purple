/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReactDOM from "react-dom";

ReactDOM.createPortal = jest.fn((element) => {
	return element;
}) as any;
