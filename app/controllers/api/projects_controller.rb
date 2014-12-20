module Api
  class ProjectsController < ApiController
    before_action :require_signed_in!, except: [:index, :show]

    def create
      @project = current_user.projects.new(project_params)
      if @project.save
        @project.pledges.create(amount: 0, delivery_date: Date.today, details: "Donation")
        render json: @project
      else
        render json: @project.errors.full_messages, status: 422
      end
    end

    def index
      @projects = current_user.projects
    end

    def show
      @project = Project.find(params[:id])
    end

    def update
      @project = Project.find(params[:id])
    
      if @project.update(project_params)
        head :no_content
      else
        flash.now[:errors] = @project.errors.full_messages
        @categories = Category.all
        render :edit
      end
    end

    def destroy
      @project = Project.find(params[:id])
      if @project.destroy
        head :no_content
      else
        flash[:errors] = ["No such project!"]
        redirect_to projects_url
      end
    end

    protected
    
    def project_params
      params.require(:project).permit(:title, 
                                      :category_id, 
                                      :blurb, 
                                      :end_date, 
                                      :goal_amount)
    end

  end
end