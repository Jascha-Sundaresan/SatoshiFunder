module Api
  class UsersController < ApiController
    wrap_parameters :user, include: [:name, :password]
    
    def create
      @user = User.new(user_params)
      if @user.save
        sign_in!(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find(params[:id])
    end

    protected

    def user_params
      params.require(:user).permit(:name, :password)
    end

  end
end