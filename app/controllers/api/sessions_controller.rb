module Api
  class SessionsController < ApiController
    wrap_parameters :user, include: [:name, :password]
    
    def create
      @user = User.find_by_credentials(params[:user][:name], params[:user][:password])
      if @user
        sign_in!(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
    
    def destroy
      sign_out!
      render json: nil
    end

    protected

    def user_params
      params.require(:user).permit(:name, :password)
    end

  end
end