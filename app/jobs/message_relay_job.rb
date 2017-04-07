class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
    MessageChannel.broadcast_to 'all', message.attributes.slice('id', 'body')
  end
end
