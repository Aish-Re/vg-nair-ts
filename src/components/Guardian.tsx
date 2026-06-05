import GuardianCard from "./GuardianCard";

const guardians = [
  {
    name : "Adv. Shri. V. N. Gopalakrishnan Nair",
    position : "Senior Partner",
    about : "Adv. Shri. V. N. Gopalakrishnan Nair is one of the most accomplished Lawyers in the State of Kerala with his legal practice spanning over a period of 48 years since 1976. He completed his graduation from MG College, Thiruvananthapuram in 1969. From 1970-73 he did his MA in English Literature from Dharam Samaj College, Aligarh. He completed his LLB from Kerala Law Academy Law College in 1976, and later LLM from the prestigious Law College, Thiruvananthapuram. It was no turning back in his glorious career since then with many high level cases won by him and he has been appointed as Special Public Prosecutor in many cases."
  },

  {
    name : "Adv. Varun Gopalakrishnan Nair",
    position : "Managing Partner",
    about : "Adv. Varun Gopalakrishnan Nair is a young, promising and enterprising Lawyer who is practicing since the past 13 years. He completed his schooling from Bhavan’s Gandhi International School, Kodaikanal, and did his B.A (Hons) LLB from the Kerala Law Academy Law College. He got admission into the prestigious Pondicherry Central University ranking first in the All India Entrance Examination and completed LLM in Corporate and Security Laws as a Rank Holder. Varun has taken the mantle of the responsibility of the firm and its litigation on all legal cases on behalf of the firm.Apart from his legal practice, Varun also serves as the Administrator for the Estate of late His Highness Sri Chithira Thirunal Balarama Varma, Maharaja of Travancore. In this role, he oversees the management of the estate and ensures that the wishes of the late Maharaja are carried out. This position reflects his strong sense of responsibility and commitment to public service."
  },
]

function Guardians() {
  return (
    <section className="guardians">
      <div className="guardians-header">
        <h1>The Guardians of VG Nair</h1>
        <div className="guardians-line"></div>
      </div>

      <div className="guardiancards">
        {guardians.map((guardian)=> (
          <GuardianCard 
            name = {guardian.name}
            position = {guardian.position}
            about = {guardian.about} 
            />
        ))}       
      </div>
    </section>
  );
}

export default Guardians;