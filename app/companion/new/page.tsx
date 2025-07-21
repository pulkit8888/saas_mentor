import CompanionForm from "@/components/CompanionForm";
import {redirect} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = () => {

    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
                    {/* <article className="companion-limit">
                        <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
                        <div className="cta-badge">
                            Upgrade your plan
                        </div>
                        <h1>You’ve Reached Your Limit</h1>
                        <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
                        <Link href="/subscription" className="btn-primary w-full justify-center" >
                            Upgrade My Plan
                        </Link>
                    </article> */}
                    <article className="w-full gap-4 flex flex-col">
                        <h1>Companion Builder</h1>
                        <CompanionForm />
                    </article>
        </main>
    )
}

export default NewCompanion
