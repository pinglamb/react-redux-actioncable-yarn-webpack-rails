import ActionCable from 'actioncable'

Cable = {}
Cable.consumer = ActionCable.createConsumer()

Cable.message = Cable.consumer.subscriptions.create "MessageChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    $("#messages").append data.dom

export default Cable
