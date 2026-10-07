import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

const interRegular = readFile(path.join(process.cwd(), "public/fonts/Inter-Regular.woff"));
const interSemiBold = readFile(path.join(process.cwd(), "public/fonts/Inter-SemiBold.woff"));

function clean(value: string | null, maximumLength: number): string {
    return (value ?? "").replace(/\s+/g, " ").trim().slice(0, maximumLength);
}

export async function GET(request: Request): Promise<ImageResponse> {
    const { searchParams } = new URL(request.url);
    const title = clean(searchParams.get("title"), 100) || "Nick Wilder";
    const subtitle = clean(searchParams.get("subtitle"), 240);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#1e1e1e",
                    color: "#ffffff",
                    fontFamily: "Inter",
                    padding: "76px 92px",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: 54,
                        left: 92,
                        fontSize: 24,
                        fontWeight: 500,
                        color: "#ffffff",
                    }}
                >
                    nickthewilder.com
                    <span
                        style={{
                            width: 52,
                            height: 3,
                            marginLeft: 16,
                            backgroundColor: "#ff8c00",
                        }}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            color: "#00a2d6",
                            fontSize: 68,
                            fontWeight: 600,
                            letterSpacing: "-2.5px",
                            lineHeight: 1.08,
                        }}
                    >
                        {title}
                    </div>
                    {subtitle && (
                        <div
                            style={{
                                display: "flex",
                                maxWidth: 1016,
                                marginTop: 28,
                                color: "#ffffff",
                                fontSize: 31,
                                fontWeight: 400,
                                lineHeight: 1.4,
                            }}
                        >
                            {subtitle}
                        </div>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        left: 92,
                        bottom: 54,
                        color: "#888888",
                        fontSize: 22,
                        fontWeight: 400,
                    }}
                >
                    /blog
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Inter",
                    data: await interRegular,
                    style: "normal",
                    weight: 400,
                },
                {
                    name: "Inter",
                    data: await interSemiBold,
                    style: "normal",
                    weight: 600,
                },
            ],
            headers: {
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        },
    );
}
