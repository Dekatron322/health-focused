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
  // Sample events data
  const events = [
    {
      title: "12am Gardening",
      start: "2024-09-04T12:00:00",
      end: "2024-09-05T12:00:00",
    },
    {
      title: "12PM Weekly  Exercises",
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

  const getEventBackgroundColor = (title: string): string => {
    // Implement your logic to determine the background color based on the event title
    // For example, you can use a switch statement or if conditions
    switch (title) {
      case "12am Gardening":
        return "#9654F4"
      case "12PM Weekly  Exercises":
        return "#38a169"
      case "11.00 AM Doctor’s Appointment":
        return "#F46B06"
      case "Interhouse sport":
        return "#5782FF"
      case "Educational Tour":
        return "#360083"
      default:
        return "#9654F4" // Default color
    }
  }

  const eventContent = (eventInfo: EventContentArg) => {
    const backgroundColor = getEventBackgroundColor(eventInfo.event.title)

    const eventStyle: React.CSSProperties = {
      backgroundColor,
      color: "#fff",
      padding: "15px",
      width: "100%",
      //   borderRadius: "32px",
      height: "20px",
      display: "flex",
      gap: "8px",
      alignItems: "center",
      justifyContent: "space-between",
    }

    return (
      <div style={eventStyle}>
        <div className="flex items-center gap-2">
          <Image src="/Img.svg" width={20} height={20} alt="" className="rounded-full " />
          <p className="text-xs">{eventInfo.event.title}</p>
        </div>
        <div className="rounded-full p-1 shadow-md">
          <IoIosArrowForward size={14} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        eventContent={eventContent}
      />
    </div>
  )
}

export default Calendar
