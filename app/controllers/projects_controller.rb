class ProjectsController < ApplicationController

  def new
    @project = current_user.projects.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to root_url
    else
      flash.now[:errors] = @project.errors.full_messages
      render :new
    end
  end

  def index
    @project = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
  
    if project.update(project_params)
      redirect_to projects_url
    else
      flash.now[:errors] = @project.errors.full_messages
      render :edit
    end
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      redirect_to projects_url
    else
      flash[:errors] = ["No such project!"]
      redirect_to projects_url
    end
  end

  protected
  
  def project_params
    params.require(:project).permit(:title)
  end

end
