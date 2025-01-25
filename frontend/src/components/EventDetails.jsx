import { useEventsContext } from '../hooks/useEventsContext'
import { useAuthContext } from '../hooks/useAuthContext'
// to make the date appear (we used date fns)
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const EventDetails = ({ event }) => {
  const { dispatch } = useEventsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {

    if (!user) {
      return 
    }
    const response = await fetch('/api/events/' + event._id, {

      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_EVENT', payload: json})
    }


  }
  return (
    <div className="event-details">
      <h4>{event.title}</h4>
      <p><strong>Hours: </strong>{event.hours}</p>
      <p><strong>load: </strong>{event.load}</p>
      <p>{formatDistanceToNow(new Date(event.createdAt), { addsuffix: true})}</p>
      {user && user.role === "organizer" && (
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      )}
    </div>
  )
}

export default EventDetails
