class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
    MessageChannel.broadcast_to 'all', dom: MessagesController.render(partial: 'messages/message', locals: { message: message })
  end
end
