module Api
  class PledgesController < ApiController
    before_action :require_signed_in!, except: [:index, :show]

    def create
      @pledge = Pledge.new(pledge_params)
      if @pledge.save
        render json: @pledge
      else
        render json: @pledge.errors.full_messages, status: 422
      end
    end

    def index
      @pledges = Project.find(params[:project_id]).pledges
    end

    def show
      @pledge = Pledge.find(params[:id])
    end

    # def edit
    #   @project = Project.find(params[:id])
    #   @categories = Category.all
    # end

    # def update
    #   @project = Project.find(params[:id])
    
    #   if @project.update(project_params)
    #     redirect_to project_url
    #   else
    #     flash.now[:errors] = @project.errors.full_messages
    #     @categories = Category.all
    #     render :edit
    #   end
    # end

    # def destroy
    #   @project = Project.find(params[:id])
    #   if @project.destroy
    #     redirect_to projects_url
    #   else
    #     flash[:errors] = ["No such project!"]
    #     redirect_to projects_url
    #   end
    # end

    protected
    
    def pledge_params
      params.require(:pledge).permit(:project_id, :amount, :delivery_date, :details)
    end

  end
end