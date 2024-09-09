import EmployeeList from '~/components/cards/employment/EmployeeList';
import { Footer } from '~/components/footer';
import Header from '~/components/header';
import { PageContainer } from '~/components/page';

export default function Employment() {
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
                            <p className="text-4xl pb-4 border-b">
                                &nbsp;&nbsp;&nbsp;&nbsp;Employment&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </div>

                        <EmployeeList />
                    </div>
                </div>
            </PageContainer>

            <Footer />
        </>
    );
}
