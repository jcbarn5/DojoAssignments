require 'test_helper'

class SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get session_index_url
    assert_response :success
  end

  test "should get create" do
    get session_create_url
    assert_response :success
  end

  test "should get log_in" do
    get session_log_in_url
    assert_response :success
  end

  test "should get destroy" do
    get session_destroy_url
    assert_response :success
  end

end
