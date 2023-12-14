import { Trans } from "@lingui/macro";
import { json } from "@remix-run/node";

export async function loader() {
  // @ts-expect-error po not supported very well
  const i18n = await import("../../content/locales/dynamic/($foo)._index/en.po");
  return json({ i18n });
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>
        <Trans>Asd route</Trans>
      </h1>
    </div>
  );
}
