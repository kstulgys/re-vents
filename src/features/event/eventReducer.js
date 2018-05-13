import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = [
  {
    id: "56c2a66a-a826-4d5e-a0e7-2c978138c7e3",
    title: "felis ut at dolor",
    date: "2017-12-27",
    category: "Secured",
    description:
      "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus",
    city: "Tōno",
    venue: "66948 Meadow Valley Center",
    hostedBy: "Gib Stooke",
    hostPhotoUrl:
      "https://robohash.org/ipsumquoautem.jpg?size=100x100&set=set1",
    attendees: [
      {
        id: "4864537a-3e8a-4229-86c8-be5c9c0c6261",
        name: "Lemmie",
        photoUrl: "https://robohash.org/suntquianulla.png?size=100x100&set=set1"
      },
      {
        id: "6ba80e10-a2dd-47f3-93dd-c398ff86f631",
        name: "Giorgi",
        photoUrl:
          "https://robohash.org/autemquinumquam.png?size=100x100&set=set1"
      },
      {
        id: "78de2233-0c67-4bce-8130-b8bb0963d8f3",
        name: "Tawnya",
        photoUrl: "https://robohash.org/laboresitnisi.jpg?size=100x100&set=set1"
      },
      {
        id: "6b27d66d-a6de-4c97-ad11-5682b854380f",
        name: "Robinette",
        photoUrl:
          "https://robohash.org/uttemporamolestiae.bmp?size=100x100&set=set1"
      }
    ]
  },
  {
    id: "099c3b52-9934-4121-b545-f6918b1c5f83",
    title: "aenean fermentum donec",
    date: "2018-03-27",
    category: "architecture",
    description:
      "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
    city: "Łapsze Niżne",
    venue: "7 Johnson Point",
    hostedBy: "Gayla Starbeck",
    hostPhotoUrl: "https://robohash.org/utetut.bmp?size=100x100&set=set1",
    attendees: [
      {
        id: "af22b3fe-e42e-4a1c-850c-c0c90aa8c5a5",
        name: "Zebulen",
        photoUrl: "https://robohash.org/namillout.bmp?size=100x100&set=set1"
      },
      {
        id: "88e4da2d-485c-440c-b63d-412a51f15516",
        name: "Pace",
        photoUrl:
          "https://robohash.org/earumenimvoluptatem.png?size=100x100&set=set1"
      },
      {
        id: "22359c21-c9ed-4029-a3c2-c0e045eafff9",
        name: "Nicholle",
        photoUrl: "https://robohash.org/harumquiquo.png?size=100x100&set=set1"
      },
      {
        id: "ee8660b6-ba70-4b11-b120-b4404ae03923",
        name: "Florinda",
        photoUrl:
          "https://robohash.org/sintvoluptatepraesentium.png?size=100x100&set=set1"
      }
    ]
  },
  {
    id: "c40c3061-1e1c-4370-a79c-c17606330442",
    title: "vel augue",
    date: "2017-05-12",
    category: "instruction set",
    description:
      "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio",
    city: "Kanghe",
    venue: "0 American Ash Parkway",
    hostedBy: "Lief Cleary",
    hostPhotoUrl:
      "https://robohash.org/sunthicdolores.png?size=100x100&set=set1",
    attendees: [
      {
        id: "b6f334d2-7940-4382-a132-7f35e0a72223",
        name: "Silas",
        photoUrl:
          "https://robohash.org/velessenecessitatibus.bmp?size=100x100&set=set1"
      },
      {
        id: "d56fa6e2-3269-4276-8c27-4a45f9155d8c",
        name: "Dionne",
        photoUrl:
          "https://robohash.org/eumcorporislaboriosam.png?size=100x100&set=set1"
      }
    ]
  }
];

export const createEvent = (state, payload) => {
  return [...state, payload.event];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
