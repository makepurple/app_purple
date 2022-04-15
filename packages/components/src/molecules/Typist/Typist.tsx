import { useUpdateEffect } from "@makepurple/hooks";
import { ObjectUtils } from "@makepurple/utils";
import ms from "ms";
import React, { CSSProperties, FC, ReactNode, useEffect, useState } from "react";
import { TypistCursor } from "./TypistCursor";

export interface TypistState {
	completed: boolean;
	mode: "typing" | "deleting" | "paused";
}

export interface TypistProps {
	children?: ReactNode;
	className?: string;
	deleteDelay?: number;
	deleteSpeed?: number;
	onChange?: (state: TypistState) => void;
	repeat?: boolean;
	repeatDelay?: number;
	sentences: readonly string[];
	style?: CSSProperties;
	typingDelay?: number;
	typingSpeed?: number;
}

const _Typist: FC<TypistProps> = ({
	children,
	className,
	deleteDelay = ms("2s"),
	onChange,
	repeat = true,
	sentences,
	style,
	typingDelay = ms("1s"),
	typingSpeed = ms("75ms"),
	deleteSpeed = typingSpeed,
	repeatDelay = typingDelay
}) => {
	const [mode, setMode] = useState<"typing" | "deleting" | "paused">("typing");
	const [index, setIndex] = useState<number>(0);
	const [displayedSentence, setDisplayedSentence] = useState<string>("");

	const sentence: string = sentences[index] ?? "";
	const isCompleted: boolean = sentence === displayedSentence;

	useEffect(() => {
		if (!sentence) return;
		if (mode !== "typing") return;

		const interval = setInterval(() => {
			setDisplayedSentence((oldSentence) => {
				const oldLength = oldSentence.length;

				if (oldLength >= sentence.length) {
					clearInterval(interval);

					return oldSentence;
				}

				return `${oldSentence}${sentence.charAt(oldLength)}`;
			});
		}, typingSpeed);

		return () => {
			clearInterval(interval);
		};
	}, [mode, sentence, typingSpeed]);

	useEffect(() => {
		if (!sentence) return;
		if (mode !== "deleting") return;

		const interval = setInterval(() => {
			setDisplayedSentence((oldSentence) => {
				const oldLength = oldSentence.length;

				if (!oldLength) {
					clearInterval(interval);

					return "";
				}

				return oldSentence.slice(0, oldLength - 1);
			});
		}, deleteSpeed);
	}, [deleteSpeed, mode, sentence]);

	useEffect(() => {
		if (mode !== "typing") return;
		if (!isCompleted) return;

		setMode("paused");
	}, [isCompleted, mode]);

	useEffect(() => {
		if (mode !== "paused") return;

		const timeout = setTimeout(() => {
			setMode("deleting");
		}, deleteDelay);

		return () => {
			clearTimeout(timeout);
		};
	}, [deleteDelay, mode]);

	useEffect(() => {
		if (index >= sentences.length - 1) return;
		if (mode !== "deleting") return;
		if (displayedSentence) return;

		const timeout = setTimeout(() => {
			setIndex((oldIndex) => (oldIndex >= sentences.length - 1 ? 0 : oldIndex + 1));
			setMode("typing");
		}, typingDelay);

		return () => {
			clearTimeout(timeout);
		};
	}, [displayedSentence, index, mode, sentences, typingDelay]);

	useEffect(() => {
		if (!repeat) return;
		if (index < sentences.length - 1) return;
		if (mode !== "deleting") return;
		if (displayedSentence) return;

		const timeout = setTimeout(() => {
			setIndex(0);
			setMode("typing");
		}, repeatDelay);

		return () => {
			clearTimeout(timeout);
		};
	}, [displayedSentence, index, mode, repeat, repeatDelay, sentences]);

	const completed = isCompleted && index === sentences.length - 1 && mode === "paused";

	useUpdateEffect(() => {
		onChange?.({ completed, mode });
	}, [completed, mode, onChange]);

	return (
		<span className={className} style={style}>
			<span>{displayedSentence}</span>
			{children}
		</span>
	);
};

_Typist.displayName = "Typist";

export const Typist = ObjectUtils.setStatic(_Typist, {
	Cursor: TypistCursor
});
