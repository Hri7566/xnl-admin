import { Footer } from '~/components/footer';
import Header from '~/components/header';
import { PageContainer } from '~/components/page';

export default function About() {
    return (
        <>
            <Header />

            <div
                style={{
                    background: 'linear-gradient(20deg, #ff660005, #ff990005)'
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

            <PageContainer>
                <div className="flex justify-center items-center min-h-[75vh]">
                    <div className="flex-col">
                        <div className="mb-6 flex text-center justify-center">
                            <p className="text-5xl pb-4 border-b">
                                &nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>

                        <p className="text-lg indent-10 w-[60%] mx-auto">
                            We make things. What do we make? Things. We make a
                            lot of things. Things, we make. When we make things,
                            we are making things. Things are definitely made by
                            us. We make things as we make them. Our things are
                            made by us, and we made them. The things we make are
                            made by us. Our things are made, and we made our
                            things. We make our things, as they are our things.
                            The things we make are constituted by the things
                            they are. The things are things, and we made them.
                            Our things are made. The things we make are things,
                            they were made by us, and they are our things.
                        </p>
                    </div>
                </div>
            </PageContainer>

            <Footer />
        </>
    );
}
