require 'test_helper'

class BetsControllerTest < ActionDispatch::IntegrationTest
  test "should get farm" do
    get bets_farm_url
    assert_response :success
  end

  test "should get house" do
    get bets_house_url
    assert_response :success
  end

  test "should get cave" do
    get bets_cave_url
    assert_response :success
  end

  test "should get casino" do
    get bets_casino_url
    assert_response :success
  end

end
