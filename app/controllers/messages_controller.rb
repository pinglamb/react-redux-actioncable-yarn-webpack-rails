class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    @message.save
    respond_to do |format|
      format.html { redirect_to root_url }
      format.js
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
