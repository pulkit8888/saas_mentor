import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

import {getSubjectColor} from "@/lib/utils";



const Page = () => {
  return (
    <main>
    <h1 className="text-2xl underline">Popular Companions</h1>
    
    <section className="home-section">
      <CompanionCard 
      id  = "123"
      name="Neura the Brainy Explorer"
      topic="Neural Network of the Brain"
      subject="science"
      duration="45"
      color="#ffeb8e"
      />
      <CompanionCard 
      id  = "456"
      name="Neura the Brainy Explorer"
      topic="Neural Network of the Brain"
      subject="science"
      duration="30"
      color="#ffda6e"
      />
            <CompanionCard 
      id  = "789"
      name="Neura the Brainy Explorer"
      topic="Neural Network of the Brain"
      subject="science"
      duration="45"
      color="#ffda6e"
      />
    </section>
    <section className="home-section">
      <CompanionsList
      title = "Recently completed sessions" 
      companions={recentSessions}
      classNames="w-2/3 max-lg:w-full"/>
      <CTA />
    </section>
    </main>
  )
}
  

export default Page