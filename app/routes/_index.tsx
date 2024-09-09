import { Footer } from '~/components/footer';
import Header from '~/components/header';
import { PageContainer } from '~/components/page';

export default function Index() {
    return (
        <>
            <div className="absolute top-0 -z-40 backdrop-blur-sm w-full min-h-screen isolate bg-black" />

            <div className="absolute -z-30 min-h-full min-w-full overflow-hidden">
                <video
                    className="min-w-full min-h-full w-auto h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    onLoad={() => {}}
                    autoPlay
                    muted
                >
                    <source src="/bg.webm#t=4" type="video/webm" />
                </video>
            </div>

            <div
                style={{
                    background:
                        'linear-gradient(20deg, #ff660005, #ff990005), #00000040'
                }}
                className="absolute top-0 -z-20 backdrop-blur-sm w-full min-h-screen isolate"
            />

            <div
                style={{
                    background: 'url("/grain.svg")',
                    opacity: 0.1
                }}
                className="absolute top-0 -z-10 backdrop-blur-sm w-full min-h-screen isolate"
            />

            <Header />
            <PageContainer>
                <div
                    id="middle"
                    className="flex justify-center items-center w-full min-h-[75vh]"
                >
                    <h1 className="text-7xl text-center">
                        Pushing the boundaries of what is achievable.
                    </h1>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
}
