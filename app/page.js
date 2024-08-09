
import AttendanceList from "../components/AttendanceList";
import DeskTopSideBar from "@/components/DeskTopSideBar";


export default function Home() {
  return (
    <main className="bg-bg-green h-screen">
      <div className="sm:ml-[27%] py-[50px] sm:mr-10  grid grid-cols-1 sm:grid-cols-3 gap-5 mx-10"> 
       <DeskTopSideBar />
       <AttendanceList/>
      </div>
    </main>
  );
}
