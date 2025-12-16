import { useState } from 'react';
import '../styles/Feedback.css';

import { useTranslation } from 'react-i18next';

const Feedback = () => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Details
        name: '',
        age: '',
        gender: '',
        typeOfUser: 'Self',
        address: '',
        cityTown: '',
        profession: '',
        dateTimeOfTesting: new Date().toLocaleString(),
        
        // Mobile Details
        mobileNumber: '',
        typeOfPhone: 'Smart Phone',
        mobileBrandModel: '',
        yearOfManufacturing: '2025',
        operatingSystem: 'Android'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        console.log('Feedback submitted:', formData);
        alert('Feedback submitted successfully!');
    };

    const clearForm = () => {
        setFormData({
            name: '',
            age: '',
            gender: '',
            typeOfUser: 'Self',
            address: '',
            cityTown: '',
            profession: '',
            dateTimeOfTesting: new Date().toLocaleString(),
            mobileNumber: '',
            typeOfPhone: 'Smart Phone',
            mobileBrandModel: '',
            yearOfManufacturing: '2025',
            operatingSystem: 'Android'
        });
        setCurrentStep(1);
    };

    return (
        <div className="feedback-container">
            <h1 className="feedback-title">Feedback</h1>
            
            {/* Step Navigation */}
            <div className="step-navigation">
                <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
                    <span className="step-number">1</span>
                    <span className="step-label">Personal Details</span>
                </div>
                <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
                    <span className="step-number">2</span>
                    <span className="step-label">Mobile Details</span>
                </div>
                <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
                    <span className="step-number">3</span>
                    <span className="step-label">112 India App Feedback</span>
                </div>
                <div className={`step ${currentStep === 4 ? 'active' : ''}`}>
                    <span className="step-number">4</span>
                    <span className="step-label">Panic Button Feedback</span>
                </div>
            </div>

            <div className="feedback-form">
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Name<span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Age<span className="required">*</span>:</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Gender<span className="required">*</span>:</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formData.gender === 'Male'}
                                        onChange={handleInputChange}
                                    />
                                    Male
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === 'Female'}
                                        onChange={handleInputChange}
                                    />
                                    Female
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Transgender"
                                        checked={formData.gender === 'Transgender'}
                                        onChange={handleInputChange}
                                    />
                                    Transgender
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Type of User<span className="required">*</span>:</label>
                            <select
                                name="typeOfUser"
                                value={formData.typeOfUser}
                                onChange={handleInputChange}
                            >
                                <option value="Self">Self</option>
                                <option value="Family Member">Family Member</option>
                                <option value="Friend">Friend</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Address<span className="required">*</span>:</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                rows="4"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>City/Town<span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="cityTown"
                                value={formData.cityTown}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Profession:</label>
                            <input
                                type="text"
                                name="profession"
                                value={formData.profession}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Date & Time of Testing<span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="dateTimeOfTesting"
                                value={formData.dateTimeOfTesting}
                                onChange={handleInputChange}
                                readOnly
                                className="readonly-field"
                            />
                        </div>
                    </div>
                )}

                {/* Step 2: Mobile Details */}
                {currentStep === 2 && (
                    <div className="form-step">
                        <div className="form-group">
                            <label>Mobile Number<span className="required">*</span>:</label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                className="highlight-field"
                                placeholder="This value is required."
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Type of Phone:</label>
                            <select
                                name="typeOfPhone"
                                value={formData.typeOfPhone}
                                onChange={handleInputChange}
                            >
                                <option value="Smart Phone">Smart Phone</option>
                                <option value="Feature Phone">Feature Phone</option>
                                <option value="Basic Phone">Basic Phone</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Mobile Brand/Model:</label>
                            <input
                                type="text"
                                name="mobileBrandModel"
                                value={formData.mobileBrandModel}
                                onChange={handleInputChange}
                                placeholder="e.g. Samsung Galaxy S5"
                            />
                        </div>

                        <div className="form-group">
                            <label>Year of Manufacturing:</label>
                            <select
                                name="yearOfManufacturing"
                                value={formData.yearOfManufacturing}
                                onChange={handleInputChange}
                            >
                                {Array.from({ length: 15 }, (_, i) => 2025 - i).map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Operating System:</label>
                            <select
                                name="operatingSystem"
                                value={formData.operatingSystem}
                                onChange={handleInputChange}
                            >
                                <option value="Android">Android</option>
                                <option value="iOS">iOS</option>
                                <option value="Windows">Windows</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* Step 3: 112 India App Feedback */}
                {currentStep === 3 && (
                    <div className="form-step">
                        <div className="coming-soon">
                            <h3>112 India App Feedback</h3>
                            <p>This section is coming soon...</p>
                        </div>
                    </div>
                )}

                {/* Step 4: Panic Button Feedback */}
                {currentStep === 4 && (
                    <div className="form-step">
                        <div className="coming-soon">
                            <h3>Panic Button Feedback</h3>
                            <p>This section is coming soon...</p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="form-actions">
                    <button 
                        type="button" 
                        onClick={prevStep} 
                        className="btn-secondary"
                        disabled={currentStep === 1}
                    >
                        Previous
                    </button>
                    
                    {currentStep < 4 ? (
                        <button 
                            type="button" 
                            onClick={nextStep} 
                            className="btn-primary"
                        >
                            Next
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            onClick={handleSubmit} 
                            className="btn-submit"
                        >
                            Submit Feedback
                        </button>
                    )}
                    
                    <button 
                        type="button" 
                        onClick={clearForm} 
                        className="btn-clear"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;