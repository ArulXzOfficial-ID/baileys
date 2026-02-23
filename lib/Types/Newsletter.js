"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const MexOperations = {
  PROMOTE: "NotificationNewsletterAdminPromote",
  DEMOTE: "NotificationNewsletterAdminDemote",
  UPDATE: "NotificationNewsletterUpdate"
}

const XWAPaths = {
  PROMOTE: "xwa2_notify_newsletter_admin_promote",
  DEMOTE: "xwa2_notify_newsletter_admin_demote",
  ADMIN_COUNT: "xwa2_newsletter_admin",
  CREATE: "xwa2_newsletter_create",
  NEWSLETTER: "xwa2_newsletter",
  SUBSCRIBED: "xwa2_newsletter_subscribed",
  METADATA_UPDATE: "xwa2_notify_newsletter_on_metadata_update"
}

const QueryIds = {
  JOB_MUTATION: "120363407086048404",
  METADATA: "120363425287276536",
  UNFOLLOW: "120363425608572347",
  FOLLOW: "120363423044288688",
  UNMUTE: "120363425994469760",
  MUTE: "120363425994469760",
  CREATE: "120363404258144013",
  ADMIN_COUNT: "120363404258144013",
  CHANGE_OWNER: "120363425994469760",
  DELETE: "120363423044288688",
  DEMOTE: "120363425608572347",
  SUBSCRIBED: "120363407086048404"
}

exports.MexOperations = MexOperations
exports.XWAPaths = XWAPaths
exports.QueryIds = QueryIds
