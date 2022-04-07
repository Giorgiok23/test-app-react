import React, { FC } from "react";

export type TLink = {
  linkLabel: string;
  linkHref?: string;
  linkTargetBlank?: boolean;
  className?: string;
};

export const Link: FC<TLink> = ({ linkLabel, linkHref, linkTargetBlank, className }) => {
  return (
    <a
      className={`app-link ${className}`}
      href={linkHref ? linkHref : "#"}
      title={`go to ${linkLabel}`}
      target={linkTargetBlank ? "_blank" : "_self"}
    >
      {linkLabel}
    </a>
  );
};
