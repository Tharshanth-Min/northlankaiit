import React from 'react';
import './Notification.css';
import { store } from 'react-notifications-component';


class Notification {
  InValidCredentials = () => {
    store.addNotification({
      title: "Credentials",
      message: "Invalid Credentials",
      isMobile: true,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      }
    });
  }

  DataUpdatedSuccess = (title) => {
    store.addNotification({
      title: title,
      message: "Data Updated",
      isMobile: true,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      }
    });
  }

  DataUpdatedFailed = (title) => {
    store.addNotification({
      title: title,
      message: "Error while updating data",
      isMobile: true,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      }
    });
  }
  FetchDataFailed = (title) => {
    store.addNotification({
      title: title,
      message: "Error while fetching the data",
      isMobile: true,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      }
    });
  }
}


export default new Notification();