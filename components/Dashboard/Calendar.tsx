import React from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { EventContentArg } from "@fullcalendar/core"

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  const events = [
    {
      title: "12am Gardening",
      start: "2024-09-04T12:00:00",
      end: "2024-09-05T12:00:00",
    },
    {
      title: "12PM Weekly Exercises",
      start: "2024-09-07T14:00:00",
      end: "2024-09-08T16:00:00",
    },
    {
      title: "11.00 AM Doctor’s Appointment",
      start: "2024-09-17T14:00:00",
      end: "2024-09-18T16:00:00",
    },
    {
      title: "Interhouse sport",
      start: "2024-09-22T14:00:00",
      end: "2024-09-23T16:00:00",
    },
    {
      title: "Educational Tour",
      start: "2024-10-01T14:00:00",
      end: "2024-10-02T16:00:00",
    },
  ]

  const eventContent = (eventInfo: EventContentArg) => {
    const eventStyle: React.CSSProperties = {
      backgroundColor: "#5782FF",
      color: "#fff",
      padding: "10px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
    }

    return (
      <div style={eventStyle}>
        <div className="flex items-center gap-2">
          <Image src="/Img.svg" width={20} height={20} alt="" className="rounded-full " />
          <p>{eventInfo.event.title}</p>
        </div>
        <IoIosArrowForward size={14} />
      </div>
    )
  }

  return (
    <div>
      <style jsx>{`
        /* Customize FullCalendar title */
        .fc-toolbar-title {
          font-size: 10px; /* Adjust size here */
          font-weight: bold;
          text-align: center;
        }
      `}</style>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"80vh"}
        events={events}
        eventContent={eventContent}
      />
    </div>
  )
}

export default Calendar
