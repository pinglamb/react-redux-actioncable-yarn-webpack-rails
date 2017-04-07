class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    @message.save
    redirect_to root_url
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
