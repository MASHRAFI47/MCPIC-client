// import { useEffect, useState } from "react"
// import ExecutiveYearsCol from "./ExecutiveYearsCol";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


//panel member pictures 2022-2023
import mashrafi from '../../assets/images/panel/mashrafi.jpg'
import arik from '../../assets/images/panel/Arik.jpg'
import areeb from '../../assets/images/panel/Areeb.jpg'
import samiulsami from '../../assets/images/panel/samiulsami.jpg'


import mehreen from '../../assets/images/panel/mehreen.jpg'
import nowshin from '../../assets/images/panel22to23/nowshin.jpg'
import labiba from '../../assets/images/panel22to23/labiba.jpeg'




import blankImage from '../../assets/images/blank.webp'
import sabiq from '../../assets/images/panel/sabiq.jpeg'
import ajwad from '../../assets/images/panel/ajwadAbrar.jpeg'
import fahad from '../../assets/images/panel/fahad.jpg'
import raiyan from '../../assets/images/panel/raiyan.jpg'
import aviv from '../../assets/images/panel/aviv.png'
import adib from '../../assets/images/panel/adib.jpg'
import proloy from '../../assets/images/panel/proloy.jpg'


//panel member pictures 2023-2024
import azora from '../../assets/images/panel23to24/azora.jpg'
import tanzilZerin from '../../assets/images/panel23to24/tanzil-zerin.jpg'
import tasniha from '../../assets/images/panel23to24/tasniha.jpg'
import maisha from '../../assets/images/panel23to24/maisha.jpg'
import mahfuz from '../../assets/images/panel23to24/mahfuz.jpg'
import ayaan from '../../assets/images/panel23to24/ayaan.jpeg'
import adnan from '../../assets/images/panel23to24/adnan.jpg'
import faqid from '../../assets/images/panel23to24/faqid.jpeg'
import tashfia from '../../assets/images/panel23to24/tashfia.jpeg'
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';


//panel member pictures 2025-2026
import aryan_aviv from "../../assets/images/panel25to26/aryan-kamal-aviv.jpg"
import raiyan_hasan from "../../assets/images/panel25to26/Raiyan-Hasan.jpg"
import proloy_charushi from "../../assets/images/panel25to26/Proloy-Charushi.jpeg"
import maisha_majed from "../../assets/images/panel25to26/Maisha-Majed.jpeg"
import tasnim_zerin_ohana from "../../assets/images/panel25to26/Tasnim-Zerin-Ohana.jpeg"
import zaima_khanam_warda from "../../assets/images/panel25to26/Zaima-Khanam-Warda.jpg"
import abdul_kadir_kabbo from "../../assets/images/panel25to26/abdul-kadir-kabbo.jpeg"
import soyad_soroar from "../../assets/images/panel25to26/Soyad-Soroar.webp"
import tasfiah_tasnim from "../../assets/images/panel25to26/Tasfiah-Tasnim.webp"
import afrida_ahnaf_chowdhury_bevor from "../../assets/images/panel25to26/Afrida-Ahnaf-Chowdhury-Bevor.jpg"
import zarin_tasnim_nowshin from "../../assets/images/panel25to26/Zarin-Tasnim-Nowshin.webp"
import arosh_bin_wahid from "../../assets/images/panel25to26/Arosh-Bin-Wahid.png"
import tazwar_tausif from "../../assets/images/panel25to26/Tazwar-Tausif.jpeg"
import fuad_bin_qaium from "../../assets/images/panel25to26/Fuad-Bin-Qaium.jpeg"
import azora_islam_ohie from "../../assets/images/panel25to26/Azora-Islam-Ohie.jpeg"
import sadia_mubash_shara from "../../assets/images/panel25to26/Sadia-Mubash-Sara.jpeg"
import nazifa_sumaiya from "../../assets/images/panel25to26/Nazifa-Sumaiya.jpeg"



const Executives = () => {
    const { theme } = useAuth()


    // const [years, setYears] = useState(null)
    // useEffect(() => {
    //     fetch(`executiveYears.json`)
    //         .then(res => res.json())
    //         .then(data => setYears(data))
    // }, [])

    // 25-26
    const panelMembers25to26 = [
        {
            id: 61,
            name: "Aryan Kamal Aviv",
            post: "President",
            image: aryan_aviv
        },
        {
            id: 62,
            name: "Raiyan Hasan",
            post: "Vice President",
            image: raiyan_hasan
        },
        {
            id: 63,
            name: "Proloy Charushi",
            post: "Vice President",
            image: proloy_charushi
        },
        {
            id: 64,
            name: "Maisha Majed",
            post: "Secretary",
            image: maisha_majed
        },
        {
            id: 65,
            name: "Tasnim Zerin Ohana",
            post: "Assistant Secretary",
            image: tasnim_zerin_ohana
        },
        {
            id: 66,
            name: "Zaima Khanam Warda",
            post: "Joint Secretary",
            image: zaima_khanam_warda
        },
        {
            id: 67,
            name: "Abdul Kadir Kabbo",
            post: "IT Head",
            image: abdul_kadir_kabbo
        },
        {
            id: 68,
            name: "Soyad Soroar",
            post: "Head of Content",
            image: soyad_soroar,
        },
        {
            id: 69,
            name: "Tasfiah Tasnim",
            post: "Treasurer",
            image: tasfiah_tasnim
        },
        {
            id: 70,
            name: "Afrida Ahnaf Chowdhury Bevor",
            post: "Organizing Secretary",
            image: afrida_ahnaf_chowdhury_bevor
        },
        {
            id: 71,
            name: "Zarin Tasnim Nowshin",
            post: "Asst. Organizing Secretary",
            image: zarin_tasnim_nowshin,
        },
        {
            id: 72,
            name: "Arosh Bin Wahid",
            post: "Logistician",
            image: arosh_bin_wahid,
        },
        {
            id: 73,
            name: "Tazwar Tausif",
            post: "Content Manager",
            image: tazwar_tausif,
        },
        {
            id: 74,
            name: "Fuad Bin Qaium",
            post: "IT Officer",
            image: fuad_bin_qaium,
        },
        {
            id: 75,
            name: "Azora Islam Ohie",
            post: "Public Relations Officer",
            image: azora_islam_ohie,
        },
        {
            id: 76,
            name: "Sadia Mubash Shara",
            post: "Human Resources Manager",
            image: sadia_mubash_shara,
        },
        {
            id: 77,
            name: "Nazifa Sumaiya",
            post: "Executive",
            image: nazifa_sumaiya
        },
    ]




    const panelMembers22to23 = [
        {
            id: 101251,
            name: "Afiun Nahar",
            post: "Moderator",
            image: blankImage
        },
        {
            id: 1,
            name: "Mashrafi Bin Nur",
            post: "President",
            image: mashrafi
        },
        {
            id: 2,
            name: "MD. Arikuzzaman",
            post: "Vice President (Admin)",
            image: arik
        },
        {
            id: 3,
            name: "Samiul Haque Chowdhury",
            post: "Vice President (Event)",
            image: samiulsami
        },
        {
            id: 4,
            name: "Raiyan Hasan",
            post: "Vice President (IT)",
            image: raiyan
        },
        {
            id: 3123,
            name: "Abdullah Islam Sabiq",
            post: "General Secretary",
            image: sabiq
        },
        {
            id: 4123,
            name: "Zaima Khanam Warda",
            post: "Organizing Secretary",
            image: blankImage
        },
        {
            id: 5,
            name: "Ahnaf Muttaki Adib",
            post: "Treasurer",
            image: adib
        },
        {
            id: 6,
            name: "Fahad Hossain",
            post: "Field Officer",
            image: fahad
        },
        {
            id: 7,
            name: "Aryan Kamal Aviv",
            post: "Field Officer",
            image: aviv
        },
        {
            id: 8,
            name: "Tanzim Hasan Bhuiyan",
            post: "Event Manager",
            image: blankImage
        },
        {
            id: 9,
            name: "Afrida Ahnaf Chowdhury",
            post: "Public Relations Officer",
            image: blankImage
        },
        {
            id: 10,
            name: "Zarin Tasnim Nowshin",
            post: "Content Writer",
            image: nowshin
        },
        {
            id: 11,
            name: "Areeb Jawad",
            post: "IT Secretary",
            image: areeb
        },
        {
            id: 12,
            name: "Afsheen Iqbal",
            post: "Content Writer",
            image: blankImage
        },
        {
            id: 13,
            name: "Proloy Charushi",
            post: "Designer",
            image: proloy
        },
        {
            id: 14,
            name: "Ajwad Abrar",
            post: "Executive Member (IT)",
            image: ajwad
        },
        {
            id: 15,
            name: "Junaira Mehreen",
            post: "Executive Member (IT)",
            image: mehreen
        },
        {
            id: 16,
            name: "Faria Afrin Raisa",
            post: "Executive Member (Admin)",
            image: blankImage
        },
        {
            id: 17,
            name: "Mahdi Ashyam",
            post: "Executive Member (Event)",
            image: blankImage
        },
        {
            id: 18,
            name: "Israt Jahan Labiba",
            post: "Executive Member",
            image: labiba
        },
        {
            id: 19,
            name: "Riad Amin",
            post: "Executive Member (Admin)",
            image: blankImage
        },
    ]


    const panelMembers23to24 = [
        {
            id: 101251,
            name: "Afiun Nahar",
            post: "Moderator",
            image: blankImage
        },
        {
            id: 20,
            name: "Mashrafi Bin Nur",
            post: "Advisor",
            image: mashrafi
        },
        {
            id: 21,
            name: "MD. Arikuzzaman",
            post: "Advisor",
            image: arik
        },
        {
            id: 22,
            name: "Samiul Haque Chowdhury",
            post: "Advisor",
            image: samiulsami
        },
        {
            id: 23,
            name: "Areeb Jawad",
            post: "President",
            image: areeb
        },
        {
            id: 24,
            name: "MD. Fahad Hossain",
            post: "Vice President",
            image: fahad
        },
        {
            id: 25,
            name: "Abdullah Islam Sabiq",
            post: "General Secretary",
            image: sabiq
        },
        {
            id: 26,
            name: "Raiyan Hasan",
            post: "Head of IT",
            image: raiyan
        },
        {
            id: 27,
            name: "MD. Salehin Alam",
            post: "Organizing Secretary",
            image: blankImage
        },
        {
            id: 28,
            name: "Proloy Charushi",
            post: "Asst. General Secretary",
            image: proloy
        },
        {
            id: 29,
            name: "Yasar Faqid Zaman",
            post: "Asst. Organizing Secretary",
            image: faqid
        },
        {
            id: 30,
            name: "Tasnia Naushin Ela",
            post: "Organizing Secretary",
            image: tasniha
        },
        {
            id: 31,
            name: "Tashfia Tasnim",
            post: "Public Relations Officer",
            image: tashfia
        },
        {
            id: 32,
            name: "Ajwad Abrar",
            post: "Joint Secretary",
            image: ajwad
        },
        {
            id: 33,
            name: "Soyad Sorower",
            post: "Media Councilor",
            image: blankImage
        },
        {
            id: 34,
            name: "Mustakim Nur Salin",
            post: "IT Secretary",
            image: blankImage
        },
        {
            id: 35,
            name: "Tasniha Tanzil Zerin",
            post: "IT Officer",
            image: tanzilZerin
        },
        {
            id: 36,
            name: "Azora Islam",
            post: "HR Manager",
            image: azora
        },
        {
            id: 37,
            name: "Muhammad Irteza",
            post: "Designer",
            image: adnan
        },
        {
            id: 38,
            name: "Maisha Majed",
            post: "Content Manager",
            image: maisha
        },
        {
            id: 39,
            name: "Sazzatul Meraz Ayaan",
            post: "Executive",
            image: ayaan
        },
        {
            id: 40,
            name: "Mahfuz Ahmed Likhon",
            post: "IT Officer",
            image: mahfuz
        },
        {
            id: 41,
            name: "Aryan Kamal Aviv",
            post: "Field Officer",
            image: aviv
        },
        {
            id: 42,
            name: "Ahnaf Muttaki Adib",
            post: "Field Officer",
            image: adib
        },
    ]




    // 24-25
    const panelMembers24to25 = [
        {
            id: 43,
            name: "Mahfuz Ahmed Likhon",
            post: "President",
            image: mahfuz
        },
        {
            id: 44,
            name: "Tasniha Tanzil Zerin",
            post: "Vice President",
            image: blankImage
        },
        {
            id: 45,
            name: "Raiyan Hasan",
            post: "Vice President",
            image: raiyan
        },
        {
            id: 46,
            name: "Aryan Kamal Aviv",
            post: "Secretary",
            image: aviv
        },
        {
            id: 47,
            name: "Maisha Majed",
            post: "Assistant Secretary",
            image: maisha
        },
        {
            id: 48,
            name: "Humayra Jahan Hridita",
            post: "Joint Secretary",
            image: blankImage
        },
        {
            id: 49,
            name: "Proloy Charushi",
            post: "IT Head",
            image: proloy
        },
        {
            id: 50,
            name: "Zarin Tasnim Nowshin",
            post: "Treasurer",
            image: nowshin
        },
        {
            id: 51,
            name: "Afrida Ahnaf Chowdhury Bivor",
            post: "Organizing Secretary",
            image: blankImage
        },
        {
            id: 52,
            name: "Tasfiah Tasnim",
            post: "Assistant Organizing Secretary",
            image: tashfia
        },
        {
            id: 53,
            name: "Ahnaf Muttaki Adib",
            post: "Field Manager",
            image: adib
        },
        {
            id: 54,
            name: "Safayet Hossain Sabyoun",
            post: "Content Manager",
            image: blankImage
        },
        {
            id: 55,
            name: "Jerin Subah Aroni",
            post: "Content Manager",
            image: blankImage
        },
        {
            id: 56,
            name: "Azora Islam Ohie",
            post: "Public Relations Officer",
            image: azora
        },
        {
            id: 57,
            name: "Sumormee Sumanto",
            post: "Information Technology Officer",
            image: blankImage
        },
        {
            id: 58,
            name: "Soyad Soroar",
            post: "Designer",
            image: blankImage
        },
        {
            id: 59,
            name: "Tasnim Zerin Ohana",
            post: "Executive",
            image: blankImage
        },
        {
            id: 60,
            name: "Abdul Kadir Kabbo",
            post: "IT Officer",
            image: blankImage
        },
    ]



    return (
        <section className={`${theme === "" ? "bg-[#dee8f6]" : ""} py-12`}>
            <Helmet>
                <title>MCPITC | Executives</title>
            </Helmet>
            <div className="container mx-auto">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Meet Our <br /> <span className="text-[#e92bde]">Executives</span></h1>
                        {
                            years?.map(year => <ExecutiveYearsCol key={year?.id} year={year} />)
                        }
                    </div>

                    <div>

                    </div>
                </div> */}

                <Tabs className={'text-center'} data-aos="fade-down">
                    <TabList>
                        <Tab style={{ color: "#0052cc" }}><h1 className='text-xl font-bold'>2025-2026</h1></Tab>
                        <Tab style={{ color: "#0052cc" }}><h1 className='text-xl font-bold'>2024-2025</h1></Tab>
                        <Tab style={{ color: "#0052cc" }}><h1 className='text-xl font-bold'>2023-2024</h1></Tab>
                        <Tab style={{ color: "#0052cc" }}><h1 className='text-xl font-bold'>2022-2023</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <div className='mt-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                    {
                                        panelMembers25to26?.map(panel => <div key={panel?.id} className="card">
                                            <figure><img src={panel?.image} className='h-[20rem] w-[20rem] object-cover rounded-full' alt={panel?.name} /></figure>
                                            <div className="card-body p-0 mt-4 gap-0">
                                                <h2 className={`card-title mx-auto ${theme === "" ? "text-black" : "text-gray-200"}`}>{panel?.name}</h2>
                                                <p className='font-semibold text-[#0052cc]'>{panel?.post}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <div className='mt-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                    {
                                        panelMembers24to25?.map(panel => <div key={panel?.id} className="card">
                                            <figure><img src={panel?.image} className='h-[20rem] w-[20rem] object-cover rounded-full' alt={panel?.name} /></figure>
                                            <div className="card-body p-0 mt-4 gap-0">
                                                <h2 className={`card-title mx-auto ${theme === "" ? "text-black" : "text-gray-200"}`}>{panel?.name}</h2>
                                                <p className='font-semibold text-[#0052cc]'>{panel?.post}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <div className='mt-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                    {
                                        panelMembers23to24?.map(panel => <div key={panel?.id} className="card">
                                            <figure><img src={panel?.image} className='h-[20rem] w-[20rem] object-cover rounded-full' alt={panel?.name} /></figure>
                                            <div className="card-body p-0 mt-4 gap-0">
                                                <h2 className={`card-title mx-auto ${theme === "" ? "text-black" : "text-gray-200"}`}>{panel?.name}</h2>
                                                <p className='font-semibold text-[#0052cc]'>{panel?.post}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className='mt-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                    {
                                        panelMembers22to23?.map(panel => <div key={panel?.id} className="card">
                                            <figure><img src={panel?.image} className='h-[20rem] w-[20rem] object-cover rounded-full' alt={panel?.name} /></figure>
                                            <div className="card-body p-0 mt-4 gap-0">
                                                <h2 className={`card-title mx-auto ${theme === "" ? "text-black" : "text-gray-200"}`}>{panel?.name}</h2>
                                                <p className='font-semibold text-[#0052cc]'>{panel?.post}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}

export default Executives