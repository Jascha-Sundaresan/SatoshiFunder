module Api
  class BacksController < ApiController

    def create
      @back = Back.new(back_params)
      @back.user_id = current_user.id
      if @back.save
        render json: true
        # head :ok
        # could use `head :no_content` or `render :json => true`
      else
        render json: @back.errors.full_messages, status: 422
      end
    end

    protected
        
    def back_params
      params.require(:back).permit(:pledge_id, :amount)
    end    
  end
end