class StudentsController < ApplicationController
  def index
    @dojo = Dojo.find(params[:dojo_id])
    @students = Student.where(dojo_id:@dojo)

  end

  def new
    @dojos = Dojo.all
    @dojo = Dojo.find(params[:dojo_id])

    @student = Student.new
    render 'students/new.html.erb'
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to "/dojos/#{@student.dojo_id}/students", notice: "You created a student!!!!!"
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @student = Student.find(params[:id])
    @dojo = Dojo.find(params[:dojo_id])
    render 'students/show.html.erb'

  end

  def edit
    @student = Student.find(params[:id])
    @dojos = Dojo.all
    @dojo = Dojo.find(params[:dojo_id])

  end

  def update
    @student = Student.find(params[:id])
    if @student.update(student_params)
      redirect_to "/dojos/#{@student.dojo_id}/students", notice: "You edited a student!!!!!"
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy
    redirect_to :back
  end

  private
    def student_params
      params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
    end
end
